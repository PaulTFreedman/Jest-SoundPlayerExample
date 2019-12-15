import SoundPlayerConsumer from '../src/sound-player-consumer';
import SoundPlayer from '../src/sound-player';

jest.mock('../src/sound-player');

describe('sound-player-consumer', () => {
    it('should use mock of the SoundPlayer dependency', () => {
        const mockPlaySoundFile = jest.fn(() => console.log('In the mocked dependency'));

        (SoundPlayer as jest.Mock).mockImplementation(
            () => {
                return {
                    playSoundFile: mockPlaySoundFile
                };
            }
        );

        const consumer = new SoundPlayerConsumer();
        consumer.playSomethingCool();
    });
});