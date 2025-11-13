export default function chartClickable(chart, clickHandler) {
  // Add click events to chart
  setTimeout(() => {
    const svgEl = chart.svgEl._groups[0][0];

    // Get clickable elements based on chart type
    let clickableElements;

    // Check what elements are actually available in the SVG
    const allPaths = svgEl.querySelectorAll("path");
    const allArcs = svgEl.querySelectorAll("path.xkcd-chart-arc");
    const allRects = svgEl.querySelectorAll("rect.xkcd-chart-bar");
    const allCircles = svgEl.querySelectorAll("circle");

    // Try to detect chart type by available elements
    if (allArcs.length > 0 && allRects.length === 0) {
      // Likely a pie chart (has paths, no rects)
      clickableElements = allPaths;
      console.log("Detected pie chart by elements - using path selector");
    } else if (allRects.length > 0) {
      // Likely a bar chart (has rects)
      clickableElements = allRects;
      console.log("Detected bar chart by elements - using rect selector");
    } else if (allCircles.length > 0) {
      // Likely a line chart (has circles)
      clickableElements = allCircles;
      console.log("Detected line chart by elements - using circle selector");
    } else {
      // Fallback: try to find any clickable elements
      clickableElements = svgEl.querySelectorAll("path, rect, circle");
      console.log("Using fallback selector");
    }

    clickableElements.forEach((element, index) => {
      element.style.cursor = "pointer";
      element.addEventListener("click", () => {
        clickHandler(index, chart);
      });
    });
  }, 100);
}
