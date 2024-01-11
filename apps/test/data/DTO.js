import {faker} from '@faker-js/faker';

export const CreateUserDummyDTO = () => {
    return {
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        countryCode: faker.location.countryCode(),
        msnid: faker.phone.number()
    }
};

export const SaveCardDummyDTO = () => {
    return {
        channelId: faker.string.uuid(),
        cardId: faker.string.uuid(),
        userId: faker.string.uuid(),
    }
};