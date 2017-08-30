import * as SettingsActionTypes from '../actiontypes/settings';

const initialSettings = {
    color: {
        red: 223,
        green: 12,
        blue: 12,
    },
    size: 15,
    gravity: 0.75,
    bounciness: 0.80,
    friction: 0.60
}

export default function Settings(state = initialSettings, action) {
    switch (action.type) {
        case SettingsActionTypes.CHANGE_COLOR:
            return {
                color: action.color,
                size: state.size,
                gravity: state.gravity,
                bounciness: state.bounciness,
                friction: state.friction
            }

        case SettingsActionTypes.CHANGE_SIZE:
            return {
                color: state.color,
                size: action.size,
                gravity: state.gravity,
                bounciness: state.bounciness,
                friction: state.friction
            }

        case SettingsActionTypes.CHANGE_GRAVITY:
            return {
                color: state.color,
                size: state.size,
                gravity: action.gravity,
                bounciness: state.bounciness,
                friction: state.friction
            }

        case SettingsActionTypes.CHANGE_BOUNCINESS:
            return {
                color: state.color,
                size: state.size,
                gravity: state.gravity,
                bounciness: action.bounciness,
                friction: state.friction
            }

        case SettingsActionTypes.CHANGE_FRICTION:
            return {
                color: state.color,
                size: state.size,
                gravity: state.gravity,
                bounciness: state.bounciness,
                friction: action.friction
            }

        default:
            return state;
    }
}