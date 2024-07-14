import sound_vals from "./sound_config.json"
type Sound = {
    uuid: number;
    filepath: string;
}

export function get_sound(isFocus:boolean) { 
    let s = {} as Sound; 

    if (isFocus)
    {
        if (sound_vals.focus_notifier_sound == 0)
        {
            s.uuid=Math.floor(Math.random() * sound_vals.num_focus_sounds) + 1;
        } else 
        {
            s.uuid=sound_vals.focus_notifier_sound;
        }

        s.filepath = "/FocusSound/" + `F${(s.uuid)}.mp3`;
        
    } else 
    { 
        if (sound_vals.move_notifier_sound == 0)
            {
                s.uuid=Math.floor(Math.random() * sound_vals.num_move_sounds) + 1;
            } else 
            {
                s.uuid=sound_vals.move_notifier_sound;
            }
        s.filepath = "/MoveSound/" + `M${(s.uuid)}.mp3`;
    }

    return s;


    // if (sound_vals.focus_notifier_sound == 0) 
    // { 
    //     FocusSound.uuid = randomInt(1, sound_vals.num_focus_sounds+1); 
    // } else
    // {
    //     FocusSound.uuid = sound_vals.focus_notifier_sound;
    // }
    // FocusSound.filepath = path.join(__dirname, "./FocusSound", `F${ FocusSound.uuid}`);

    // if (sound_vals.move_notifier_sound == 0) 
    // { 
    //     MoveSound.uuid = randomInt(1, sound_vals.num_move_sounds+1); 
    // } else
    // {
    //     MoveSound.uuid = sound_vals.move_notifier_sound;
    // }
    // MoveSound.filepath = path.join(__dirname, "./MoveSound", `F${ MoveSound.uuid}`);

    // return [FocusSound, MoveSound];
}