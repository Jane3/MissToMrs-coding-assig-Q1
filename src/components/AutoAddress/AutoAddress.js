import React, {useState} from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";

//this function contains address auto-completion feature
export default function AutoAddress() {
  const [address, setAddress] = useState("");

  
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    setAddress(value);
    console.log(results);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress} // called everytime input value changes
        onSelect={handleSelect} // when user selects one of the options being present to them
      >
        {/* This is where you render whatever you want to based on the state of PlacesAutocomplete  */}
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* getInputProps will return the props that you can spread over the <input /> element.  */}
            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {/* check to see if the auto complete is loading or not  */}
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {

                // Apply the styling for the list of selections or suggestions 
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  // This function will return the props that you can spread over each suggestion item in your autocomplete dropdown. You MUST call it with suggestion object as an argument
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
