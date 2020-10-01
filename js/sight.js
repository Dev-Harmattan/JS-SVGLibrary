class SVGElement {
  constructor(type) {
    this.type = type;
    this.namespace = "http://www.w3.org/2000/svg";
    this.node = document.createElementNS(this.namespace, this.type);

    return this;
  }

  attr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      setAttributeNS(null, this.node);
    }
    return this;
  }

  append(element) {
    const parent = typeof element == String ? document.querySelector(element) : element.node;
    this.node.append(parent)
    return this;
  }
}

class Sight {
  constructor(selector, width, heigth) {
    this.svg = new SVGAElement('svg').attr({viewbox: `0 0 ${width} ${heigth}`}).append(selector);
  }

  draw(type, attrs) {
    return new SVGAElement(type).attr(attrs).append(this)
  }
}
