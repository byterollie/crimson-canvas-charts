# Crimson Canvas Charts

A simple, lightweight charting library to render beautiful charts on canvas elements.

## Installation

```bash
npm install crimson-canvas-charts
```

## Usage

After installation, you can use it to create charts by providing a canvas element ID and data.

```javascript
import createLineChart from 'crimson-canvas-charts';

const data = {
labels: ['January', 'February', 'March', 'April', 'May'],
datasets: [{
label: 'Demo Chart',
data: [65, 59, 80, 81, 56]
}]
};

createLineChart('myChartCanvas', data);
```

Ensure your HTML includes a canvas element with the id specified:

```html
<canvas id="myChartCanvas" width="400" height="400"></canvas>
```

## License

This project is licensed under the MIT License.
