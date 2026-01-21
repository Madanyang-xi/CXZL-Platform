// 标签切换功能
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// 随访完成
document.querySelectorAll('.complete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = '已完成';
        btn.style.background = '#718096';
        btn.disabled = true;
    });
});

// 提交咨询
document.getElementById('consult-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('consult-content').value.trim();
    const type = document.getElementById('consult-type').value;
    const status = document.querySelector('.consult-status');
    
    if (content && type) {
        status.innerHTML = '<p style="color:#48bb78">咨询提交成功</p >';
        document.getElementById('consult-form').reset();
    } else {
        status.innerHTML = '<p style="color:#e53e3e">请完善咨询</p >';
    }
});