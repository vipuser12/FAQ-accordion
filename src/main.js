document.querySelectorAll('li').forEach(item => {
  const heading = item.querySelector('h3');
  const paragraph = item.querySelector('p');
  const expand = item.querySelector('.expand');
  const collapse = item.querySelector('.collapse');
  
  heading.addEventListener('click', () => {
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
    expand.style.display = paragraph.style.display === 'none' ? 'inline' : 'none';
    collapse.style.display = paragraph.style.display === 'none' ? 'none' : 'inline';
  });
  
  expand.addEventListener('click', () => {
    paragraph.style.display = 'block';
    expand.style.display = 'none';
    collapse.style.display = 'inline';
  });
  
  collapse.addEventListener('click', () => {
    paragraph.style.display = 'none';
    expand.style.display = 'inline';
    collapse.style.display = 'none';
  });
});