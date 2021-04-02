export class StateActivity extends HTMLElement {

    rendered: boolean;
    constructor() {
        super();
        // 元素在这里创建
        console.log('state activity ctor');

    }

    connectedCallback() {
        // 在元素被添加到文档之后，浏览器会调用这个方法
        //（如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
        // var shadow = this.attachShadow({ mode: 'open' });

        // var div = document.createElement('div');
        // div.innerHTML = '好的呀';
        // shadow.appendChild(div);
        // console.log(1, shadow,this);

        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    disconnectedCallback() {
        // 在元素从文档移除的时候，浏览器会调用这个方法
        // （如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
    }

    static get observedAttributes() {
        return ['title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // 当上面数组中的属性发生变化的时候，这个方法会被调用
        console.log('attr change:', name, oldValue, newValue);
        this.render();
    }

    adoptedCallback() {
        // 在元素被移动到新的文档的时候，这个方法会被调用
        // （document.adoptNode 会用到, 非常少见）
    }

    // 还可以添加更多的元素方法和属性

    render(): void {
        this.innerHTML = this.getAttribute('title');

    }
}
