import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    // this.load.image('mushroom', 'assets/images/mushroom2.png')

    this.load.tilemap('tilesMap', './assets/tilemaps/tilemap.json', null, Phaser.Tilemap.TILED_JSON)
    this.load.image('tilesImg', './assets/tilemaps/tiles/roguelikeSheet_transparent.png')
    this.load.atlasXML('robots', './assets/spritesheets/spritesheet_robotsTop.png', './assets/spritesheets/spritesheet_robotsTop.xml')
  }

  create () {
    this.state.start('Game')
  }
}
