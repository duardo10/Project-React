import { Footer } from '.';


export default {
    title: 'Footer',
    component: Footer,
    args: {
        children: `<p><a>Feito por Luis Eduardo</a></p>`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
}
