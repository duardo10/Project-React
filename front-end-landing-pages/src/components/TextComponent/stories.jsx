import { TextComponent } from '.';


export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Fugiat, pariatur totam laudantium recusandae numquam architecto 
        similique voluptate quaerat consequuntur, nemo eum ab sapiente nulla, 
        fugit a saepe commodi dolor est?`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
}
