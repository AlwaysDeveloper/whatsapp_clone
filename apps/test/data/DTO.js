import {faker} from '@faker-js/faker';

export const CreateUserDummyDTO = () => {
    return {
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        msnid: faker.phone.number(),
        username: faker.internet.userName(),
        countryCode: faker.location.countryCode()
    }
};

export const SaveCardDummyDTO = () => {
    return {
        channelId: faker.string.uuid(),
        cardId: faker.string.uuid(),
        userId: faker.string.uuid(),
    }
};