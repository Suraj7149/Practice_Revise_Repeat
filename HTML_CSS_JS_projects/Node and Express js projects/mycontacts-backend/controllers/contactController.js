//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContacts = (req, res)=>{
    res.status(200).json({ message: "Get all contacts"});
};


//@desc create new contacts
//@route POST /api/contacts
//@access public 
const createContact = (req, res)=>{
    console.log("The request body is: ", req.body);
    const {name, email, phone } = req.body;
    if (!name || !email || !phone ) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    res.status(201).json({ message: "Create Contact"});
};


//@desc GET contacts
//@route GET /api/contacts
//@access public 
const getContact = (req, res)=>{
    res.status(200).json({ message: "Get contacts for " + req.params.id});
};

//@desc UPDATE contacts
//@route PUT /api/contacts/:id
//@access public 
const updateContact = (req, res)=>{
    res.status(200).json({ message: "Update contacts for " + req.params.id});
};


//@desc Delete contacts
//@route Delete /api/contacts/:id
//@access public 
const deleteContact = (req, res)=>{
    res.status(200).json({ message: "Delete contact for " + req.params.id});
};


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };