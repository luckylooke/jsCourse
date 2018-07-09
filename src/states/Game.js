/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {

    // this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // const bannerText = 'Phaser + ES6 + Webpack'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
    //   font: '40px Bangers',
    //   fill: '#111111',
    //   smoothed: false
    // })

    // banner.padding.set(10, 16)
    // banner.anchor.setTo(0.5)

    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    // this.game.add.existing(this.mushroom)

    // var mapData = getMapData()
    // var lData = []

    // for (let i = 0; i < (128 * 128); i++) {
    //   lData.push(1)
    // }

    // mapData.layers[0].data = lData

    // this.game.cache.addTilemap('tiles', null, mapData, Phaser.Tilemap.JSON)

     //  Create our map (the 16x16 is the tile size)
    var map = this.game.add.tilemap('tilesMap', 16, 16)
        //  'tiles' = cache image key, 16x16 = tile size

    // console.log('tilesMap cache', this.game.cache.getItem('tilesMap', Phaser.Cache.TILEMAP))
    map.addTilesetImage('tiles', 'tilesImg', 16, 16, 0, 1)

    //  0 is important
    // var layer = map.createLayer(0)
    var layerBg = map.createLayer('bgLayer')
    var layerIsl = map.createLayer('islandsLayer')
    var layerWalk = map.createLayer('walkableLayer')
    var layerColl = map.createLayer('collisionLayer')
    //  Scroll it
    layerBg.resizeWorld()

    this.cursors = this.game.input.keyboard.createCursorKeys()

    this.player = new Player({
      game: this.game,
      // x: this.world.centerX,
      // y: this.world.centerY,
      x: 64 * 16,
      y: 64 * 16,
      atlas: 'robots',
      asset: 'robot_3Dgreen.png',
      map,
    })
    this.game.add.existing(this.player)
    // this.game.physics.arcade.enable(this.player)
    this.game.camera.follow(this.player)
    // this.player.body.collideWorldBounds = true

    // this.layerColl = layerColl
    // map.setCollisionBetween(1, 9999, true, layerColl)

  }

  update() {

    if (this.cursors.left.isDown)
    {
        this.player.x -= 3;
    }
    else if (this.cursors.right.isDown)
    {
        this.player.x += 3;
    }

    if (this.cursors.up.isDown)
    {
        this.player.y -= 3;
    }
    else if (this.cursors.down.isDown)
    {
        this.player.y += 3;
    }

    // this.game.physics.arcade.collide(this.player, this.layerColl)




    // if (this.cursors.left.isDown)
    // {
    //     this.game.camera.x -= 5;
    // }
    // else if (this.cursors.right.isDown)
    // {
    //     this.game.camera.x += 5;
    // }

    // if (this.cursors.up.isDown)
    // {
    //     this.game.camera.y -= 5;
    // }
    // else if (this.cursors.down.isDown)
    // {
    //     this.game.camera.y += 5;
    // }
  }

  render() {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
      // this.game.debug.body(this.player, 'rgba(255,0,0,0.2)')
    }
  }
}

function getMapData () {
  return {
    height: 128,
    layers: [
      {
        data: [],
        height: 128,
        name: 'Layer 1',
        opacity: 1,
        type: 'tilelayer',
        visible: true,
        width: 128,
        x: 0,
        y: 0,
      // },
      // {
      //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 157, 157, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   height: 128,
      //   name: 'Tile Layer 2',
      //   opacity: 1,
      //   type: 'tilelayer',
      //   visible: true,
      //   width: 128,
      //   x: 0,
      //   y: 0,
      // },
      // {
      //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 0, 0, 0, 0, 0, 0, 0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 239, 239, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 189, 0, 0, 0, 177, 0, 0, 177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 189, 189, 234, 0, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   height: 128,
      //   name: 'Tile Layer 3',
      //   opacity: 1,
      //   type: 'tilelayer',
      //   visible: true,
      //   width: 128,
      //   x: 0,
      //   y: 0,
      }],
    nextobjectid: 1,
    orientation: 'orthogonal',
    properties: {},
    renderorder: 'right-down',
    tileheight: 16,
    tilesets: [
      {
        firstgid: 1,
        image: 'tiles',
        // image: '/assets/tilemaps/tiles/roguelikeSheet_transparent.png',
        imageheight: 526,
        imagewidth: 968,
        margin: 0,
        name: 'tiles',
        properties: {},
        spacing: 1,
        tileheight: 16,
        tilewidth: 16,
      // },
      // {
      //   firstgid: 129,
      //   image: '../tiles/kenny_items_64x64.png',
      //   imageheight: 256,
      //   imagewidth: 512,
      //   margin: 0,
      //   name: 'kenny_items_64x64',
      //   properties: {},
      //   spacing: 0,
      //   tileheight: 64,
      //   tilewidth: 64,
      // },
      // {
      //   firstgid: 161,
      //   image: '../tiles/kenny_platformer_64x64.png',
      //   imageheight: 1024,
      //   imagewidth: 320,
      //   margin: 0,
      //   name: 'kenny_platformer_64x64',
      //   properties: {},
      //   spacing: 0,
      //   tileheight: 64,
      //   tilewidth: 64,
      }],
    tilewidth: 16,
    version: 1,
    width: 128,
  }
}
