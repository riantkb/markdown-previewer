marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});


function previewMarkdown() {
    document.getElementById("preview").innerHTML = marked(document.getElementById("markdown").value);
    MathJax.Hub.Typeset(document.getElementById("preview"));
};

document.getElementById("preview-button").addEventListener('click', previewMarkdown);

function get_sample() {
    var url = "data/sample.md";
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            return request.responseText;
        }
    }
    request.send(null);
};

document.getElementById("markdown").value = get_sample();
