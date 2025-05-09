// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = new Array(imageWidth).fill(null).map(() => new Array(imageHeight).fill(false));

/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
const isPointInImage = (x: number, y: number): boolean => {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
};

const drawDot = (x: number, y: number): void => {
  if (!isPointInImage(x, y)) {
    throw new Error(`Trying to drawDot out of imageData[${imageWidth}][${imageHeight}] at [${x}][${y}]`);
  }

  imageData[x][y] = true;
};

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
const outputImage = (onChar: string = "X", offChar: string = " "): void => {
  let text = "";

  for (let j = 0; j < imageHeight; j++) {
    for (let i = 0; i < imageWidth; i++) {
      text += imageData[i][j] ? onChar : offChar;
    }

    text += "\n"; // new line
  }

  console.log(text);
};

function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number,
): void {
  if (width <= 0 || height <= 0) {
    throw new Error('Invalid rectangle dimensions');
  }

  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, height - 1, width);

  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(width - 1, y, height);
}

function drawHorizontalLine(x: number, y: number, width: number): void {
  const limit = x + width

  for (let i = x; i < limit; i++) {
    drawDot(i, y);
  }
}

function drawVerticalLine(x: number, y: number, height: number): void {
  const limit = y + height
  
  for (let j = y; j < limit; j++) {
    drawDot(x, j);
  }
}


// Smile
// draw head
drawRectangle(0, 0, imageWidth, imageHeight);

// eyes
drawDot(7, 2);
drawDot(12, 2);

// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage("O", "\u2588");
