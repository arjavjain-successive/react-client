import {  Card, ResourceList ,ResourceItem,TextStyle} from "@shopify/polaris";
import React  from "react";
import '../../App.css'
import books from "../../data/book/Book";

const Trainee = () =>{
    const resourceName = {
        singular: "book",
        plural: "books"
      };
    return(
        <div className="books">
            <Card title="Trainee dashboard" sectioned>
                <p>Trainee can See only.</p>
                <ResourceList
                    resourceName={resourceName}
                    items={books}
                    renderItem={(item) => {
                        const {id,name,Author} = item;
                        return (
                          <ResourceItem
                            id={id}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">Book:{name}</TextStyle>
                            </h3>
                            <p>
                                Author:{Author}
                            </p>
                          </ResourceItem>
                        );
                    }
                }
                />

            </Card>
            
        </div>
    )
}
export default Trainee;
