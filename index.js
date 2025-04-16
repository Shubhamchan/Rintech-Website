document.querySelectorAll('.service-card').forEach(function(card) {
    card.addEventListener('click', function () {
      let title = card.querySelector('h3').innerText.trim();
  
      title = title.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
  
      const folderMap = {
        'TAX REGISTRATION': 'Tax Registration',
        'INDUSTRIAL SPECIFIC REGD.': 'Industrial specific regd',
        'COMPANY REGISTRATION': 'Company registration',
        'DEVELOPMENT': 'Development'
      };
  
      const folderName = folderMap[title.toUpperCase()];
  
      const fileName = title.toLowerCase()
                            .replace(/\./g, '')        
                            .replace(/\s+/g, '-')   
                            + '.html';
  
      const fullPath = `/Component/${folderName}/${fileName}`;

      window.location.href = fullPath;
    });
  });
  