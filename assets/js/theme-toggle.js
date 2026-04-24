// 主题切换功能
(function() {
  // 检测系统偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // 从本地存储加载主题设置
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // 设置初始主题
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  // 主题切换函数
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 更新按钮图标
    updateThemeButton(newTheme);
  }
  
  // 更新主题按钮图标
  function updateThemeButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.innerHTML = theme === 'light' ? '🌙' : '☀️';
    }
  }
  
  // 初始化主题按钮
  function initThemeButton() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateThemeButton(currentTheme);
    
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  }
  
  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeButton);
  } else {
    initThemeButton();
  }
})();