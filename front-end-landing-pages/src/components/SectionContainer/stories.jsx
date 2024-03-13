import { SectionContainer } from '.';


export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam praesentium 
                    adipisci, unde exercitationem itaque velit quod autem aperiam blanditiis. 
                    Voluptatibus architecto soluta doloribus nesciunt odio! Vel iste ullam ea!
                </p>
            </div>
        ),
    },
    argTypes: {
        children: { type: '' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    );
}
