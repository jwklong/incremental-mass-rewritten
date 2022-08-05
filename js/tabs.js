const TABS = {
    choose(x, stab=false) {
        if (!stab) {
            if (x==5) tmp.sn_tab = tmp.tab
            tmp.tab = x
            if (x!=5) {
                tmp.sn_tab = tmp.tab
                tree_update = true
            }
        }
        else tmp.stab[tmp.tab] = x
    },
    1: [
        { id: "M" },
        { id: "vibe check" },
        { id: "upgraden'ts", unl() { return player.rp.unl } },
        { id: "challenge the game", unl() { return player.chal.unl } },
        { id: "smol", unl() { return player.atom.unl }, style: "atom" },
        { id: "soup", unl() { return player.supernova.times.gte(1) || quUnl() }, style: "sn" },
        { id: "no more physics", unl() { return quUnl() }, style: "qu" },
        { id: "change life" },
    ],
    2: {
        0: [
            { id: "mass" },
            { id: "hole", unl() { return player.bh.unl }, style: "bh" },
            { id: "Atomic Generator", unl() { return player.atom.unl }, style: "atom" },
            { id: "Stars", unl() { return STARS.unlocked() } },
            { id: "Indescribable Matter", unl() { return quUnl() } },
        ],
        1: [
            { id: "renk rewards" },
            { id: "c major scale", unl() { return tmp.scaling ? tmp.scaling.super.length>0 : false } },
            { id: "Prestige Rewards", unl() { return hasUpgrade("br",9) } },
        ],
        3: [
            { id: "challenge part 1" },
            { id: "challenge part 2", unl() { return hasTree("unl3") }, style: "qu" },
            //{ id: "Big Rip", unl() { return hasTree("unl4") }, style: "qu" },
        ],
        4: [
            { id: "quirk" },
            { id: "elemente", unl() { return player.chal.comps[7].gte(16) || player.supernova.times.gte(1) || quUnl() } },
            { id: "i am D", unl() { return MASS_DILATION.unlocked() }, style: "dilation" },
            { id: "Break Dilation", unl() { return hasUpgrade("br",9) }, style: "break_dilation" },
        ],
        5: [
            { id: "Jimmy Neutron" },
            { id: "Bosons", unl() { return player.supernova.post_10 } },
            { id: "Fermions", unl() { return player.supernova.fermions.unl } },
            { id: "Radiation", unl() { return tmp.radiation.unl } },
        ],
        6: [
            { id: "Chroma" },
            { id: "Quantum Milestones" },
            { id: "Auto-Quantum", unl() { return tmp.qu.mil_reached[6] } },
            { id: "Primordium", unl() { return PRIM.unl() } },
            { id: "Entropy", unl() { return player.qu.en.unl } },
        ],
    },
}
