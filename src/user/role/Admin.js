import {  Card, ResourceList ,ResourceItem,TextStyle, Button} from "@shopify/polaris";
import React ,{ useState } from "react";
import '../../App.css'
import books from "../../data/book/Book";

const Admin = () =>{
    const resourceName = {
        singular: "book",
        plural: "books"
      };
      const [selectedItems, setSelectedItems] = useState([]);
    return(
        <div className = "books">
            <Card title="Admin dashboard" sectioned>
                <p>User can Add and Edit action only.</p>
                <ResourceList
                    resourceName={resourceName}
                    items={books}
                    selectedItems={selectedItems}
                    onSelectionChange={setSelectedItems}
                    selectables
                    renderItem={(item) => {
                        const {id,name,Author} = item;
                        return (
                          <ResourceItem
                            id={id}
                           
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">Book Name:{name}</TextStyle>
                            </h3>
                            <h3>
                              <TextStyle variation="strong">Author Name:{Author}</TextStyle>
                            </h3>
                            <Button>Add</Button>
                            <Button>Edit</Button>
                          </ResourceItem>
                        );
                    }
                }
                />

            </Card>
            
        </div>
    )
}
export default Admin;
