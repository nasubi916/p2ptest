//Peer作成
  const peer = new Peer({
    key: '11d4f7a0-3900-4917-8c88-58d7a3d21ad3',
    debug: 3
  });

	peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
});
// 発信処理
document.getElementById('make-call').onclick = () => {
  const theirID = document.getElementById('their-id').value;
  const mediaConnection = peer.call(theirID, localStream);
  setEventListener(mediaConnection);
};

// イベントリスナを設置する関数
const setEventListener = mediaConnection => {
  mediaConnection.on('stream', stream => {
    // video要素にカメラ映像をセットして再生
    const videoElm = document.getElementById('their-video')
    videoElm.srcObject = stream;
    videoElm.play();
  });
}
//着信処理
peer.on('call', mediaConnection => {
  mediaConnection.answer(localStream);
  setEventListener(mediaConnection);
});
peer.on('error', err => {
  alert(err.message);
});
peer.on('close', () => {
  alert('通信が切断しました。');
});