const drawerEl = document.querySelector('#drawer');

function openDrawer(imgElement) {
  // select the drawer element:
  const drawerEl = document.querySelector('#drawer');

  // get the image source and caption from the clicked image element:
  const imgSrc = imgElement.getAttribute('src');
  const caption = imgElement.getAttribute('alt');
  console.log(imgSrc, caption);

  // create a template string with the image source and caption:
  const template = `
    <header>
        <button class="close-btn" aria-label="Close Drawer" onclick="closeDrawer()">&times;</button>
    </header>
    <div class = "drawer-content">
      <img src = "${imgSrc}" alt = "${caption}">
      <p> ${caption}</p>
      </div>
   `;
  drawerEl.innerHTML = template;
  drawerEl.className = 'open';
  drawerEl.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  drawerEl.className = '';
  drawerEl.setAttribute('aria-hidden', 'true');
}
