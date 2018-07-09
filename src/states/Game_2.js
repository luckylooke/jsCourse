/*  */
// /* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () { }
  preload () {
    //  tiles are 16x16 each
    this.game.load.image('tiles', 'assets/tilemaps/tiles/roguelikeSheet_transparent.png')
  }

  create () {
    this.game.stage.backgroundColor = '#01555f'
    // const bannerText = 'Phaser + ES6 + Webpack'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
    //   font: '40px Bangers',
    //   fill: '#77BFA3',
    //   smoothed: false,
    // })

    // banner.padding.set(10, 16)
    // banner.anchor.setTo(0.5)

    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom',
    // })

    // cursor controls
    this.cursor = this.input.keyboard.createCursorKeys()

    // this.game.add.existing(this.mushroom)

    //  Create some map data dynamically
    //  Map size is 128x128 tiles
    var mapData = getMapData()
    // const tiles = ['5', '62']

    // console.log(data);

    //  Add data to the cache
    this.game.cache.addTilemap('bgMap', null, mapData, Phaser.Tilemap.JSON)

    //  Create our map (the 16x16 is the tile size)
    this.map = this.game.add.tilemap('bgMap', 16, 16)

    //  'tiles' = cache image key, 16x16 = tile size
    this.map.addTilesetImage('tiles', 'tiles', 16, 16, 0, 1)

    var layer1 = this.map.createLayer('Tile Layer 1')
    var layer2 = this.map.createLayer('Tile Layer 2')
    var layer3 = this.map.createLayer('Tile Layer 3')

    layer1.resizeWorld()
    console.log('layers', layer1, layer2, layer3)

    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  update () {
    if (this.cursors.left.isDown) {
      this.game.camera.x--
    } else if (this.cursors.right.isDown) {
      this.game.camera.x++
    }

    if (this.cursors.up.isDown) {
      this.game.camera.y--
    } else if (this.cursors.down.isDown) {
      this.game.camera.y++
    }
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 32, 32)
    // }
  }
}

function getMapData () {
  return {
    height: 128,
    layers: [
      {
        data: [121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 9, 89, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 9, 9, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 105, 0, 0, 0, 97, 9, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 9, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 97, 9, 89, 0, 0, 0, 0, 0, 0, 97, 9, 89, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 97, 9, 89, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 121, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 9, 9, 9, 9, 9, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 73, 2, 2, 2, 2, 2, 121, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 73, 2, 2, 2, 2, 2, 2, 121, 121, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121],
        height: 128,
        name: 'Tile Layer 1',
        opacity: 1,
        type: 'tilelayer',
        visible: true,
        width: 128,
        x: 0,
        y: 0,
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 157, 157, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        height: 128,
        name: 'Tile Layer 2',
        opacity: 1,
        type: 'tilelayer',
        visible: true,
        width: 128,
        x: 0,
        y: 0,
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 0, 0, 0, 0, 0, 0, 0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 239, 239, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 189, 0, 0, 0, 177, 0, 0, 177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 189, 189, 234, 0, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        height: 128,
        name: 'Tile Layer 3',
        opacity: 1,
        type: 'tilelayer',
        visible: true,
        width: 128,
        x: 0,
        y: 0,
      }],
    nextobjectid: 1,
    orientation: 'orthogonal',
    properties: {},
    renderorder: 'right-down',
    tileheight: 16,
    tilesets: [
      {
        firstgid: 1,
        image: '/assets/tilemaps/tiles/roguelikeSheet_transparent.png',
        imageheight: 526,
        imagewidth: 968,
        margin: 0,
        name: 'kenny_ground_64x64',
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
