
// 菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainHeader = document.getElementById('mainHeader');
    const navMenu = document.getElementById('navMenu');
    
    // 切换菜单显示/隐藏
    menuToggle.addEventListener('click', function() {
        mainHeader.classList.toggle('expanded');
        
        // 切换aria-expanded属性，增强可访问性
        const isExpanded = mainHeader.classList.contains('expanded');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        // 防止背景滚动当菜单打开时
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
    
    // 点击菜单项后关闭菜单（移动端）
    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            mainHeader.classList.remove('expanded');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainHeader.classList.contains('expanded')) {
            mainHeader.classList.remove('expanded');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // 点击菜单外部区域关闭菜单
    document.addEventListener('click', function(e) {
        if (mainHeader.classList.contains('expanded') && 
            !mainHeader.contains(e.target) && 
            e.target !== menuToggle) {
            mainHeader.classList.remove('expanded');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // CTA按钮点击事件
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('感谢您的关注！更多功能即将推出。');
        });
    }
    
    // 添加滚动效果 - 导航栏透明度变化
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && !mainHeader.classList.contains('expanded')) {
            mainHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            mainHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });
});