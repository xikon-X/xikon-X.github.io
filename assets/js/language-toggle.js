// 语言切换功能
(function() {
  // 支持的语言
  const supportedLanguages = ['zh', 'en'];
  
  // 从本地存储加载语言设置
  const savedLanguage = localStorage.getItem('language');
  const initialLanguage = savedLanguage || 'zh'; // 默认使用中文
  
  // 设置初始语言
  document.documentElement.setAttribute('lang', initialLanguage);
  
  // 语言切换函数
  function toggleLanguage() {
    const currentLanguage = document.documentElement.getAttribute('lang');
    const newLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    
    document.documentElement.setAttribute('lang', newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // 更新页面内容
    updatePageContent(newLanguage);
    // 更新语言按钮
    updateLanguageButton(newLanguage);
  }
  
  // 更新语言按钮
  function updateLanguageButton(language) {
    const button = document.getElementById('language-toggle');
    if (button) {
      button.textContent = language === 'zh' ? 'EN' : '中文';
    }
  }
  
  // 更新页面内容
  function updatePageContent(language) {
    // 更新导航菜单
    updateNavigation(language);
    
    // 重定向到对应语言的页面
    redirectToLanguagePage(language);
  }
  
  // 重定向到对应语言的页面
  function redirectToLanguagePage(language) {
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    
    // 根据当前路径和目标语言确定新路径
    if (language === 'en') {
      // 中文页面切换到英文页面
      if (currentPath === '/about/') {
        newPath = '/about-en/';
      } else if (currentPath === '/projects/') {
        newPath = '/projects-en/';
      } else if (currentPath === '/contact/') {
        newPath = '/contact-en/';
      }
    } else {
      // 英文页面切换到中文页面
      if (currentPath === '/about-en/') {
        newPath = '/about/';
      } else if (currentPath === '/projects-en/') {
        newPath = '/projects/';
      } else if (currentPath === '/contact-en/') {
        newPath = '/contact/';
      }
    }
    
    // 如果路径发生变化，则重定向
    if (newPath !== currentPath) {
      window.location.href = newPath;
    }
  }
  
  // 更新导航菜单
  function updateNavigation(language) {
    // 这里可以根据需要更新导航菜单的显示
  }
  
  // 初始化语言按钮
  function initLanguageButton() {
    const currentLanguage = document.documentElement.getAttribute('lang');
    updateLanguageButton(currentLanguage);
    
    const button = document.getElementById('language-toggle');
    if (button) {
      button.addEventListener('click', toggleLanguage);
    }
  }
  
  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageButton);
  } else {
    initLanguageButton();
  }
})();