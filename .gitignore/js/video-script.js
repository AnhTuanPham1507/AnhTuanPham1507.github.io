const peer = new Peer({host:'peerjs-server.herokuapp.com', secure:true, port:443})
const videoGrid = document.getElementById('video-grid')
const peers = {}
const socket = io('https://chatapp-tuan.herokuapp.com')

navigator.mediaDevices.getUserMedia({video:true,audio:false})
         .then(stream => {
            const myVideo = document.createElement('video')
            addVideoStream(myVideo,stream)
            peer.on('call',call =>{
                console.log('nghe')
                peers[call.peer] = call
                const video = document.createElement('video')
                call.answer(stream)
                call.on('stream', remoteStream =>{
                    addVideoStream(video,stream)
                })
                call.on('close',()=>{
                    video.remove()
                })
            })
            socket.on('joinRoom-user',iD =>{
                connectToNewUser(iD,stream)
            })
         })

const getParameterByName = (name, url = window.location.href) =>{
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const connectToNewUser = (iD,stream) =>{
    console.log('goi')
    const call = peer.call(iD,stream)
    const video = document.createElement('video')
    call.on('stream',remoteStream =>{
        addVideoStream(video,remoteStream)
    })
    call.on('close',()=>{
        video.remove()
    })
    peers[iD] = call
}

const addVideoStream = (video,stream) =>{
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
      })
    videoGrid.append(video)
} 

peer.on('open',iD=>{
    const roomId = getParameterByName('roomId')
    socket.emit('joinRoom',{roomId,iD})
})

socket.on('v_disconnect-user', iD => {
    if (peers[iD]) peers[iD].close()
  })

socket.on('refuse-user',name =>{
    alert(`${name} đã từ chối cuộc gọi`)
})

