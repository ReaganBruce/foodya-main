import * as React from 'react';

const Template: React.FC<Template> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Template!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface Template {}

export default Template;


//THIS IS JUST AN OPTION IF YOU WANT TO COPY/PASTE THIS TEMPLATE FOR WHEN YOU'RE CREATING NEW COMPONENTS IN THE FRONT END. 
// IT COULD SAVE TIME INSTEAD OF HAVING TO TYPE EVERYTHING OUT EACH TIME.