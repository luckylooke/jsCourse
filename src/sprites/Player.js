import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, atlas, asset, map }) {
    super(game, x+8, y+8, atlas, asset) // +8 sprite has due to anchor 0.5, due to rotation point in centre of sprite
    this.anchor.setTo(0.5)
    this.scale.setTo(0.1)
		this.tasks = []
		this.speed = 1
		this.map = map
		window.player = this
  }

  // update () {
  //   this.angle += 1
  // }

  move(x, y, cb) {
		y = -y // use cartesian orientation

		const absX = Math.abs(x)
		const absY = Math.abs(y)

		if ( x && y ) {
			if (absX >= absY) {
				let moveTween = this.move(x, 0, () => this.move(0, y))
				return moveTween
			}
			else {
				let moveTween = this.move(0, y, () => this.move(x, 0))
				return moveTween
			}
		}



		const dirX = Math.round(x / absX) || 0
		const dirY = Math.round(y / absY) || 0

		let angleTween;
		switch (true) {
			case absX && dirX > 0: // move right
				if( this.angle != 0 )
					angleTween = this.rotate(0)
				break
			case absX && dirX < 0: // move left
				if( this.angle != 180 && this.angle != -180 )
					angleTween = this.rotate(180)
				break
			case absY && dirY > 0:
				if( this.angle != -90 ) // move up
					angleTween = this.rotate(-90)
				break
			case absY && dirY > 0:
				if( this.angle != 90 ) // move down
					angleTween = this.rotate(90)
				break
		}

		if ( angleTween ) {
			angleTween.onComplete.add(() => this.move(x, y, cb))
			return angleTween;
		}

		y = -y // use cartesian orientation
		console.log('player', this )

		let posX
		let posY

		let len = absX || absY

		for (let i = 1; i <= len; i++) {
			let tmpPosX = this.x + (absX ? i * 16 * dirX : 0)
			let tmpPosY = this.y + (absY ? i * 16 * dirY : 0)

			let tile = this.map.getTileWorldXY(tmpPosX, tmpPosY, 16, 16, 'collisionLayer')
			let tile2 = this.map.getTileWorldXY(tmpPosX, tmpPosY, 16, 16, 'islandsLayer')
			console.log('tile', tile, tile2 )

			if ( tile || !tile2 )
				break

			posX = tmpPosX
			posY = tmpPosY
		}

		// let posX = this.x + (x * 16)
		// let posY = this.y + (y * 16)

		// let tile = this.map.getTileWorldXY(posX, posY, 16, 16, 'collisionLayer')

		let tween = this.game.add.tween(this).to({x: posX, y: posY}, absX ? 1000 / this.speed / absX : 1000 / this.speed / absY, Phaser.Easing.Sinusoidal.InOut, true)

		tween.onComplete.add(() => {
			console.log('move complete')
			if(cb)
				cb()
		})

		return tween
  }

	rotate( newAngle, cb ) {
		const tween = this.game.add.tween(this).to({angle: newAngle}, 200, Phaser.Easing.Sinusoidal.InOut, true)
		tween.onComplete.add(() => {
			console.log('rotation complete')
			if(cb)
				cb()
		})
		return tween
	}
}


// TODO: otacanie do blizsej strany