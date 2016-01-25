

# Loominary

A barebones interface for controlling the Doti Loom

Loominary is built with p5.js, websockets, and node.js.

To use Loominary, make sure you have your loom plugged into your serial port. Run the arduino code, and open terminal.  

Run app.js in the terminal. In the browser open localhost:8000

With the page open you can now beginning designing your pattern. Choose the colors of your  warp threads and weft threads. Update the pixel grid. Click around until you've reached your desired pattern. Hit the "Begin Weave" to start the job.

##To do

-** DONE**fix the update function for new colors
- add dimension fields 
- refactor Params object for creating new Pixell params on the fly
- add starter templates
	-random
	-Game of Life
	-checkerboard
	-houndstooth
- integrate websockets
- integrate arduino codebase

## Feature wishlist
- add webgl weave visualizer
- drag and drop
`
