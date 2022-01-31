import { Card, ResourceList, ResourceItem, TextStyle, Avatar } from "@shopify/polaris";
import React from "react";
import '../../App.css'
import books from "../../data/book/book";

const Trainee = () => {
  const resourceName = {
    singular: "book",
    plural: "books"
  };
  return (
    <div className="books">
      <Card title="Trainee dashboard" sectioned>
        <p>Trainee can See only.</p>
        <ResourceList
          resourceName={resourceName}
          items={books}
          renderItem={(item) => {
            const { id, name, Author, price, img } = item;
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
