const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Build and return the face with freckles.
function buildFace() {
  const face = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "A face covered in freckles");

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const mouth = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  mouth.setAttribute("x1", "75");
  mouth.setAttribute("y1", "137");
  mouth.setAttribute("x2", "125");
  mouth.setAttribute("y2", "137");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  // Add 60 freckles to each cheek.
  for (let i = 0; i < 60; i++) {
    const row = Math.floor(i / 10);
    const col = i % 10;

    // Left cheek.
    const leftFreckle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    leftFreckle.setAttribute("cx", String(48 + col * 3));
    leftFreckle.setAttribute("cy", String(112 + row * 3));
    leftFreckle.setAttribute("r", "1.5");
    leftFreckle.setAttribute("fill", "#8b4b27");
    face.append(leftFreckle);

    // Right cheek.
    const rightFreckle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    rightFreckle.setAttribute("cx", String(122 + col * 3));
    rightFreckle.setAttribute("cy", String(112 + row * 3));
    rightFreckle.setAttribute("r", "1.5");
    rightFreckle.setAttribute("fill", "#8b4b27");
    face.append(rightFreckle);
  }

  return face;
}

// Mount the face returned by buildFace().
const face = buildFace();
portrait.append(face);

// Keep the Spin button outside buildFace().
spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
