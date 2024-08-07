document.addEventListener('DOMContentLoaded', function () {
  const wall = document.getElementById('wall');
  const segmentCount = 20; // Number of segments in the wall
  const arcRadius = 200; // Radius of the arc

  for (let i = 0; i < segmentCount; i++) {
    const segment = document.createElement('div');
    segment.className = 'wall-segment';
    
    // Calculate the rotation angle based on the segment index
    const angle = (segmentCount / 2 - Math.abs(i - segmentCount / 2)) * 5;
    segment.style.transform = `rotateY(${angle}deg)`;
    
    // Change color based on segment index
    const colorIntensity = 255 - (i * (255 / segmentCount));
    segment.style.backgroundColor = `rgb(${colorIntensity}, ${colorIntensity}, ${colorIntensity})`;

    // Decrease height for a continuous look
    const heightAdjustment = 200 - (i * (200 / segmentCount)/2);
    segment.style.height = `${heightAdjustment}px`;

    // Adjust the translation and rotation to remove gaps
    const adjustedTheta = (i - segmentCount / 2) * (Math.PI / (segmentCount - 1)); // Adjusted angle
    const adjustedX = arcRadius * Math.sin(adjustedTheta); // Adjusted X position
    const adjustedZ = arcRadius * (1 - Math.cos(adjustedTheta)); // Adjusted Z position
    segment.style.transform = `translateX(${adjustedX}px) translateZ(${adjustedZ}px) rotateY(${adjustedTheta}rad)`;

    wall.appendChild(segment);
  }
}
);
