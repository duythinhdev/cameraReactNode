  Stream = require('node-rtsp-stream');
  var acc = 'admin';
  var pass = 'FDSsoft123'
  stream = new Stream({
      name: 'name',
      streamUrl: `rtsp://'${acc}':'${pass}'@192.168.1.110/h265/ch1/main/av_stream`,
      wsPort: 9999,
      ffmpegOptions: { // options ffmpeg flags
          '-stats': '', // an option with no neccessary value uses a blank string
          '-r': 30 // options with required values specify the value after the key
      }
  })