import React, {useState, useEffect} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import '../css/locationAuto.css';


export default function LocationSearchInputTwo({
  setBookingArrayTwo,
  bookingArrayTwo
}) {
  // const [address, setAddress] = useState("");
  const handleChange = (value) => {
    setBookingArrayTwo((prevState) => ({
      ...prevState,
      details:{
          ...prevState.details,
          Address:value
      } 
    }))
  }
  const handleSelect = (value) => {
    setBookingArrayTwo((prevState) => ({
      ...prevState,
      details:{
          ...prevState.details,
          Address:value
      } 
    }))
  }
  return (
    <div>
      <PlacesAutocomplete value={bookingArrayTwo.details?.Address ? bookingArrayTwo.details?.Address: ""} onChange={handleChange} onSelect={handleSelect}>
          {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
            <div>
              <input {...getInputProps({
                placeholder: 'Physical address',
                className: 'location-search-input',
              })}/>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = suggestion.active ? 
                {background: "#f9dd07", cursor: "pointer"} :
                {background: "white", cursor: "pointer"}

                return(
                  <div {...getSuggestionItemProps(suggestion, {style})}>
                      {suggestion.description}
                  </div>
                )
              })}
            </div>
          )}
      </PlacesAutocomplete>
    </div>
  )
}
