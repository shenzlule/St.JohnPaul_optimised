const $tabs = document.querySelectorAll('.tab');
const $contents = document.querySelectorAll('.content__inner');

for (let i = 0; i < $tabs.length; i++) {
  const $tab = $tabs[i];
  $tab.addEventListener(
    'click',
    () => {
      $contents.forEach(($i) => {
        $i.style.display = 'none';
      });

      $tabs.forEach(($i) => {
        $i.classList.remove('active');
      });

      $contents[i].style.display = 'block';
      $tab.classList.add('active');
    }
  );
}