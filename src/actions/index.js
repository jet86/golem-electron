export let dict = Object.freeze({
    ONBOARDING: 'ONBOARDING',
    START_LOADING: 'START_LOADING',
    END_LOADING: 'END_LOADING',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SET_MESSAGE: 'SET_MESSAGE',
    SET_AUTOLAUNCH: 'SET_AUTOLAUNCH',
    SET_BLENDER: 'SET_BLENDER',
    SET_PREVIEW: 'SET_PREVIEW',
    SET_PREVIEW_EXPANDED: 'SET_PREVIEW_EXPANDED',
    SET_CURRENCY: 'SET_CURRENCY',
    UPLOAD: 'UPLOAD',
    SET_ZOOM_RATIO: 'SET_ZOOM_RATIO'
})

const {ONBOARDING, START_LOADING, END_LOADING, LOGIN, LOGOUT, SET_MESSAGE, SET_AUTOLAUNCH, SET_BLENDER, SET_PREVIEW, SET_PREVIEW_EXPANDED, SET_CURRENCY, UPLOAD, SET_ZOOM_RATIO} = dict

export const setOnboard = (payload) => ({
    type: ONBOARDING,
    payload
})

export const startLoading = (id, text) => ({
    type: START_LOADING,
    id,
    text
})

export const endLoading = (id) => ({
    type: END_LOADING,
    id
})

export const login = (payload) => ({
    type: LOGIN,
    payload
})

export const logout = () => ({
    type: LOGOUT
})

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message
})

export const setAutoLaunch = (payload) => ({
    type: SET_AUTOLAUNCH,
    payload
})

export const setBlender = (blender) => ({
    type: SET_BLENDER,
    blender
})

export const setPreview = (payload) => ({
    type: SET_PREVIEW,
    payload
})

export const setPreviewExpanded = (payload) => ({
    type: SET_PREVIEW_EXPANDED,
    payload
})

export const setCurrency = (payload) => ({
    type: SET_CURRENCY,
    payload
})

export const uploadFile = (payload) => ({
    type: UPLOAD,
    payload
})

export const setZoomRatio = (payload) => ({
    type: SET_ZOOM_RATIO,
    payload
})