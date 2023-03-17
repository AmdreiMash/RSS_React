const styled = {
    productWrapper: {
        width: '300px',
        height: '350px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        border: '1px solid  rgba(0, 0, 0, 0.09)',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '5px',
    },
    productText: { width: '100%', marginLeft: '8px' },
    SearchBar: { flex: '1', alignSelf: 'center' },
    productName: {
        marginLeft: '8px',
        fontSize: '1.5em',
        fontWeight: 'bold',
        textOverflow: 'ellipsis',
        maxHeight: '1.3em',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    productInfo: {
        width: '100%',
        position: 'relative',
        paddingBottom: '10px',
    },
    like: {
        position: 'absolute',
        bottom: '5px',
        right: '15px',
    },
};
export default styled;
