var da, ma, len, mLen, arr0, arr1, i=1;

function reset() {
  arr0 = [[0,width/2,height/2]];
  arr1 = [];
  da = 1.5707;
  ma = 1-0.00001*i;
  len = 1;
  mLen = 2;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
}

function draw() {
  background(220);
  strokeWeight(1);
  while (arr0.length < 2000) {
    for (let node of arr0) {
      let a0 = node[0] - da;
      let a1 = node[0] + da;
      let x0 = node[1] + sin(a0) * len;
      let x1 = node[1] + sin(a1) * len;
      let y0 = node[2] - cos(a0) * len;
      let y1 = node[2] - cos(a1) * len;

      line(node[1], node[2], x0, y0);
      line(node[1], node[2], x1, y1);

      arr1.push([a0, x0, y0]);
      arr1.push([a1, x1, y1]);
    }
    arr0 = arr1.slice();
    arr1 = [];
    len *= mLen;
    da *= ma;
  }
  i++;
  reset();
}
