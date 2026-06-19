(function(){
    var CONFIG = {
        siteUrl: 'https://zhm-leyu.com.cn',
        keyword: '乐鱼体育',
        seed: '570f2d8c6b37d604'
    };

    function appendStyle() {
        var style = document.createElement('style');
        style.textContent = [
            '.helper-card{background:#f9f9fb;border:1px solid #e0e0e0;border-radius:12px;padding:18px;margin:20px 0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}',
            '.helper-card h3{font-size:1.1rem;margin:0 0 10px;color:#222}',
            '.helper-card p{font-size:0.95rem;color:#555;margin:6px 0;line-height:1.5}',
            '.keyword-badge{display:inline-block;background:#f2f2f2;color:#333;border-radius:16px;padding:4px 14px;font-size:0.85rem;margin:4px 6px 4px 0;border:1px solid #ddd}',
            '.keyword-badge.highlight{background:#e6f4ea;border-color:#b7dfc5;color:#1e7e34}',
            '.visit-note{background:#fff8e1;border-left:4px solid #ffc107;padding:10px 14px;margin:14px 0 6px;border-radius:4px;font-size:0.9rem}',
            '.visit-note a{color:#1a73e8;text-decoration:none;font-weight:500}'
        ].join(' ');
        document.head.appendChild(style);
    }

    function createCard(title, contentHtml) {
        var card = document.createElement('div');
        card.className = 'helper-card';
        var h3 = document.createElement('h3');
        h3.textContent = title;
        card.appendChild(h3);
        var wrap = document.createElement('div');
        wrap.innerHTML = contentHtml;
        card.appendChild(wrap);
        return card;
    }

    function renderKeywordBadges() {
        var tags = [CONFIG.keyword, '网站助手', '使用说明', '提示卡片'];
        var html = '';
        for (var i = 0; i < tags.length; i++) {
            var cls = 'keyword-badge';
            if (tags[i] === CONFIG.keyword) cls += ' highlight';
            html += '<span class="' + cls + '">' + escapeHtml(tags[i]) + '</span>';
        }
        return html;
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function buildAccessNote() {
        var safeUrl = escapeHtml(CONFIG.siteUrl);
        return '<div class="visit-note">🔗 访问说明：当前页面属于 <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">' + safeUrl + '</a>，如需了解详情请点击链接。</div>';
    }

    function initHelper() {
        appendStyle();
        var mainContent = document.querySelector('main, #content, .content, article') || document.body;
        var infoHtml = '<p>欢迎使用本页面提示工具，这里展示关键词徽章和访问提示。</p>' +
                       '<p>关键词标签：' + renderKeywordBadges() + '</p>' +
                       buildAccessNote() +
                       '<p style="font-size:0.8rem;color:#aaa;margin-top:12px">' + CONFIG.keyword + ' · 版本标识：' + CONFIG.seed.substring(0,8) + '</p>';
        var card = createCard('页面助手 · ' + CONFIG.keyword, infoHtml);
        mainContent.insertBefore(card, mainContent.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHelper);
    } else {
        initHelper();
    }
})();