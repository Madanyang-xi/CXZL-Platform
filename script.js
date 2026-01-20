// ===== 页面加载完成后执行 =====
document.addEventListener('DOMContentLoaded', function() {

    // 1. 更新页面底部当前日期
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    const dateElement = document.getElementById('current-date');
    if(dateElement) {
        dateElement.textContent = formattedDate;
    }

    // 2. 平滑滚动到锚点（导航栏点击）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('肠享智疗平台原型已加载完成。');
});

// ===== 模拟生成报告的函数 =====
function simulateGenerateReport() {
    alert('✅ 模拟报告生成中...\n\n此功能在完整版中将调用AI模型，对接实验室数据，并生成结构化PDF报告。');
    // 在实际开发中，这里会是一个AJAX请求到后端API
}