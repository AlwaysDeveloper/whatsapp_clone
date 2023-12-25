/**
 * 
 * @param {Object} dto 
 * @returns {Function}
 */
export default function CreateDto(dto) {
    return function (value) {
        Object
            .keys(dto)
            .forEach((key) => {
                dto[key] = value[key]
            });

        return dto;
    }
}