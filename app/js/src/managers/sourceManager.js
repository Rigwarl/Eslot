const sourceManager = {
  load(callback) {
    this.queue = new createjs.LoadQueue();
    this.queue.addEventListener('progress', callback);
    this.queue.loadManifest(this.manifest);

    return new Promise((resolve, reject) => {
      this.queue.addEventListener('complete', resolve);
      this.queue.addEventListener('error', reject);
    });
  },
  getResult(name) {
    return this.queue.getResult(name);
  },
  manifest: [
    { id: 'bg', src: 'img/background.png' },
  ],
};

export default sourceManager;

