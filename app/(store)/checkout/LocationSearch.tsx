import { LoadScript } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import PlacesAutocomplete, { geocodeByPlaceId, } from 'react-places-autocomplete';

interface LocationSearchProps {
    onChange?: any;
    value?: string;
    city?: string;
    disabled?: boolean;
    deliveryAddress?: any;
    setDeliveryAddress?: any
}

function LocationSearch(props: LocationSearchProps) {    
    const [input, setInput] = useState<any>(props?.value);
    const [isDisabled, setIsDisabled] = useState(props?.disabled);    

    useEffect(() => {
        setInput(props?.value)
    }, [props?.value]);

    const handleSelect = (address: any, placeId: string) => {        
        setInput(address)        

        geocodeByPlaceId(placeId)
            .then((selectedAddress) => {
                
                let addressResult: any = { address_line2: '', location: {} }
                
                addressResult.latitude = selectedAddress?.[0]?.geometry?.location.lat()
                addressResult.longitude = selectedAddress?.[0]?.geometry?.location.lng()
                addressResult.location = address.split(',')[0]
                addressResult.address_line1 = address.split(',')[0] + " " + selectedAddress?.[0]?.formatted_address
                // addressResult.place_id = selectedAddress[0].place_id
                selectedAddress[0].address_components?.length &&
                selectedAddress[0].address_components.forEach((address) => {
                        if (address.types.includes('street_number')) addressResult.address_line2 = address.long_name;
                        if (address.types.includes('route')) addressResult.address_line2 = addressResult.address_line2 + address.long_name + ' , ';
                        // if (address.types.includes('sublocality_level_3')) addressResult.address_line2 = addressResult.address_line2 + address.long_name + ' , ';
                        // if (address.types.includes('sublocality_level_2')) addressResult.address_line2 = addressResult.address_line2 + address.long_name + ' , ';
                        // if (address.types.includes('sublocality_level_1')) addressResult.address_line2 = addressResult.address_line2 + address.long_name;
                        // if (address.types.includes('sublocality_level_1')) addressResult.zone = address.long_name;
                        if (address.types.includes('administrative_area_level_1')) addressResult.state_code = address.short_name;
                        if (address.types.includes('locality')) addressResult.city = address.long_name;
                        if (address.types.includes('administrative_area_level_3')) addressResult.city = address.long_name;
                        if (address.types.includes('administrative_area_level_1')) addressResult.state = address.long_name;
                        if (address.types.includes('postal_code')) addressResult.postal_code = address.long_name;
                        if (address.types.includes('country')) addressResult.country = address?.long_name;
                        if (address.types.includes('country')) addressResult.country_code = address.short_name;
                    });
                if (props?.setDeliveryAddress) { props?.setDeliveryAddress(addressResult) }
                else { props.onChange("address", addressResult) }
            })

    }

    return (
        <div>
            <LoadScript googleMapsApiKey={'AIzaSyC1U6s_cNHlar4BQQP17PDbwx93m8kRkp4'} libraries={["places"]}>
            <PlacesAutocomplete value={input} onSelect={handleSelect}
                onChange={(newValue: any) => setInput(newValue)}>
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div className='search-input-container col-12 p-0'>
                        <input {...getInputProps({ placeholder: 'Search Location', className: 'form-control business-form', disabled: isDisabled, })} autoComplete="off" />
                        <div className='autocomplete-container bg-light'>
                            {suggestions.map((suggestion: any, index: number) => {
                                const className = 'suggestion-item';
                                return (
                                    <div  {...getSuggestionItemProps(suggestion, { className, })} className='border-bottom border-dark-subtle p-2' key={index}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            </LoadScript>
        </div>
    );
};

export default LocationSearch;