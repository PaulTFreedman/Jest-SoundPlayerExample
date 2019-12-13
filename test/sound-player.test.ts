import SoundPlayer from '../src/sound-player';

const mockPlaySoundFile = jest.fn(() => console.log('In the mock'));
jest.mock('../src/sound-player', () => {
  return jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  });
});

describe('sound-player', () => {
  it('should work', () => {
    const player = new SoundPlayer();

    player.playSoundFile('myFile.wav');

    //expect()
  });
});