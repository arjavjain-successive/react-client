import { Card, ResourceList, ResourceItem, TextStyle, Button, Avatar } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import '../../App.css'
import books from "../../data/book/Book";
import Add from "../components/Add";

const User = () => {
  const resourceName = {
    singular: "book",
    plural: "books"
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  return (
    <div className="books">
      <Card title="User dashboard" sectioned>
        <p>User can Add action only.</p>
        <ResourceList
          resourceName={resourceName}
          items={books}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          selectables
          renderItem={(item) => {
            const { id, name, Author, img, price } = item;
            const media = <Avatar source={img} customer size="large" name={name} />;

            return (
              <ResourceItem id={id}
                media={media}
                accessibilityLabel={`View details for ${name}`}>
                <h3>
                  <TextStyle variation="strong">Book Name:{name}</TextStyle>
                </h3>
                <h3>
                  <TextStyle variation="strong">Author Name:{Author}</TextStyle>
                </h3>
                <h3>
                  <TextStyle variation="strong">Price:{price}</TextStyle>
                </h3>
                <Add handleChange={handleChange} active={active}/>
                <Button onClick={handleChange}>Add</Button>
              </ResourceItem>
            );
          }
          }
        />
      </Card>
    </div>
  )
}
export default User;
