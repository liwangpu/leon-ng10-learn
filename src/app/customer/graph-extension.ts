import { Cell, Graph, Shape } from '@antv/x6';

export function ShapeNode(name?: string) {
    console.log('shape node:', name);

    return function (target: Function) {

        console.log(11, target);
        // console.log(12, target());

        // save a reference to the original constructor
        const original = target;

        // a utility function to generate instances of a class
        function construct(constructor, args) {
            const c: any = function () {
                return constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            return new c();
        }

        // the new constructor behaviour
        const f: any = function (...args) {
            console.log(`New: ${original['name']} is created`);
            return construct(original, args);
        }

        console.log(123,new f);


        // copy prototype so intanceof operator still works
        // f.prototype = original.prototype;

        // return new constructor (will override original)
        // Graph.registerHTMLComponent(name, f as any);
        return f;
        // return new constructor (will override original)
    }

}


export abstract class MyShapeNode implements Shape.HTML.UpdatableComponent {
    public abstract render: Shape.HTML.Component;
    public abstract shouldComponentUpdate: boolean | ((this: Graph, node: Shape.HTML<Shape.HTML.Properties>) => boolean);
}