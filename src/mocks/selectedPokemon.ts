import { Pokemon } from 'types/pokemon'

const selectedPokemon: Pokemon = {
  abilities: [
    {
      ability: {
        name: 'immunity',
        url: 'https://pokeapi.co/api/v2/ability/17/'
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: 'thick-fat',
        url: 'https://pokeapi.co/api/v2/ability/47/'
      },
      is_hidden: false,
      slot: 2
    },
    {
      ability: {
        name: 'gluttony',
        url: 'https://pokeapi.co/api/v2/ability/82/'
      },
      is_hidden: true,
      slot: 3
    }
  ],
  base_experience: 189,
  forms: [
    {
      name: 'snorlax',
      url: 'https://pokeapi.co/api/v2/pokemon-form/143/'
    }
  ],
  game_indices: [
    {
      game_index: 132,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/'
      }
    },
    {
      game_index: 132,
      version: {
        name: 'blue',
        url: 'https://pokeapi.co/api/v2/version/2/'
      }
    },
    {
      game_index: 132,
      version: {
        name: 'yellow',
        url: 'https://pokeapi.co/api/v2/version/3/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'gold',
        url: 'https://pokeapi.co/api/v2/version/4/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'silver',
        url: 'https://pokeapi.co/api/v2/version/5/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'crystal',
        url: 'https://pokeapi.co/api/v2/version/6/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'ruby',
        url: 'https://pokeapi.co/api/v2/version/7/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'emerald',
        url: 'https://pokeapi.co/api/v2/version/9/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'pearl',
        url: 'https://pokeapi.co/api/v2/version/13/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'black',
        url: 'https://pokeapi.co/api/v2/version/17/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'white',
        url: 'https://pokeapi.co/api/v2/version/18/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/'
      }
    },
    {
      game_index: 143,
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/'
      }
    }
  ],
  height: 21,
  held_items: [
    {
      item: {
        name: 'chesto-berry',
        url: 'https://pokeapi.co/api/v2/item/127/'
      },
      version_details: [
        {
          rarity: 100,
          version: {
            name: 'firered',
            url: 'https://pokeapi.co/api/v2/version/10/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'leafgreen',
            url: 'https://pokeapi.co/api/v2/version/11/'
          }
        }
      ]
    },
    {
      item: {
        name: 'leftovers',
        url: 'https://pokeapi.co/api/v2/item/211/'
      },
      version_details: [
        {
          rarity: 100,
          version: {
            name: 'ruby',
            url: 'https://pokeapi.co/api/v2/version/7/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'sapphire',
            url: 'https://pokeapi.co/api/v2/version/8/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version/9/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'diamond',
            url: 'https://pokeapi.co/api/v2/version/12/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'pearl',
            url: 'https://pokeapi.co/api/v2/version/13/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version/14/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'heartgold',
            url: 'https://pokeapi.co/api/v2/version/15/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'soulsilver',
            url: 'https://pokeapi.co/api/v2/version/16/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'black',
            url: 'https://pokeapi.co/api/v2/version/17/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'white',
            url: 'https://pokeapi.co/api/v2/version/18/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'black-2',
            url: 'https://pokeapi.co/api/v2/version/21/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'white-2',
            url: 'https://pokeapi.co/api/v2/version/22/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'x',
            url: 'https://pokeapi.co/api/v2/version/23/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'y',
            url: 'https://pokeapi.co/api/v2/version/24/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'omega-ruby',
            url: 'https://pokeapi.co/api/v2/version/25/'
          }
        },
        {
          rarity: 100,
          version: {
            name: 'alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version/26/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'sun',
            url: 'https://pokeapi.co/api/v2/version/27/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'moon',
            url: 'https://pokeapi.co/api/v2/version/28/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'ultra-sun',
            url: 'https://pokeapi.co/api/v2/version/29/'
          }
        },
        {
          rarity: 5,
          version: {
            name: 'ultra-moon',
            url: 'https://pokeapi.co/api/v2/version/30/'
          }
        }
      ]
    }
  ],
  id: 143,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/143/encounters',
  moves: [
    {
      move: {
        name: 'mega-punch',
        url: 'https://pokeapi.co/api/v2/move/5/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'pay-day',
        url: 'https://pokeapi.co/api/v2/move/6/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'fire-punch',
        url: 'https://pokeapi.co/api/v2/move/7/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'ice-punch',
        url: 'https://pokeapi.co/api/v2/move/8/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'thunder-punch',
        url: 'https://pokeapi.co/api/v2/move/9/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'whirlwind',
        url: 'https://pokeapi.co/api/v2/move/18/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'mega-kick',
        url: 'https://pokeapi.co/api/v2/move/25/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'headbutt',
        url: 'https://pokeapi.co/api/v2/move/29/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        }
      ]
    },
    {
      move: {
        name: 'tackle',
        url: 'https://pokeapi.co/api/v2/move/33/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'body-slam',
        url: 'https://pokeapi.co/api/v2/move/34/'
      },
      version_group_details: [
        {
          level_learned_at: 35,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 35,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'take-down',
        url: 'https://pokeapi.co/api/v2/move/36/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'double-edge',
        url: 'https://pokeapi.co/api/v2/move/38/'
      },
      version_group_details: [
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'bite',
        url: 'https://pokeapi.co/api/v2/move/44/'
      },
      version_group_details: [
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'flamethrower',
        url: 'https://pokeapi.co/api/v2/move/53/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'water-gun',
        url: 'https://pokeapi.co/api/v2/move/55/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'hydro-pump',
        url: 'https://pokeapi.co/api/v2/move/56/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'surf',
        url: 'https://pokeapi.co/api/v2/move/57/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'ice-beam',
        url: 'https://pokeapi.co/api/v2/move/58/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'blizzard',
        url: 'https://pokeapi.co/api/v2/move/59/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'bubble-beam',
        url: 'https://pokeapi.co/api/v2/move/61/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'hyper-beam',
        url: 'https://pokeapi.co/api/v2/move/63/'
      },
      version_group_details: [
        {
          level_learned_at: 56,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 51,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'submission',
        url: 'https://pokeapi.co/api/v2/move/66/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'counter',
        url: 'https://pokeapi.co/api/v2/move/68/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'seismic-toss',
        url: 'https://pokeapi.co/api/v2/move/69/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        }
      ]
    },
    {
      move: {
        name: 'strength',
        url: 'https://pokeapi.co/api/v2/move/70/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        }
      ]
    },
    {
      move: {
        name: 'solar-beam',
        url: 'https://pokeapi.co/api/v2/move/76/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'thunderbolt',
        url: 'https://pokeapi.co/api/v2/move/85/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'thunder',
        url: 'https://pokeapi.co/api/v2/move/87/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'earthquake',
        url: 'https://pokeapi.co/api/v2/move/89/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'fissure',
        url: 'https://pokeapi.co/api/v2/move/90/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'toxic',
        url: 'https://pokeapi.co/api/v2/move/92/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        }
      ]
    },
    {
      move: {
        name: 'psychic',
        url: 'https://pokeapi.co/api/v2/move/94/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rage',
        url: 'https://pokeapi.co/api/v2/move/99/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'mimic',
        url: 'https://pokeapi.co/api/v2/move/102/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        }
      ]
    },
    {
      move: {
        name: 'screech',
        url: 'https://pokeapi.co/api/v2/move/103/'
      },
      version_group_details: [
        {
          level_learned_at: 39,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'double-team',
        url: 'https://pokeapi.co/api/v2/move/104/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'harden',
        url: 'https://pokeapi.co/api/v2/move/106/'
      },
      version_group_details: [
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'defense-curl',
        url: 'https://pokeapi.co/api/v2/move/111/'
      },
      version_group_details: [
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'reflect',
        url: 'https://pokeapi.co/api/v2/move/115/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        }
      ]
    },
    {
      move: {
        name: 'bide',
        url: 'https://pokeapi.co/api/v2/move/117/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'metronome',
        url: 'https://pokeapi.co/api/v2/move/118/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'self-destruct',
        url: 'https://pokeapi.co/api/v2/move/120/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'lick',
        url: 'https://pokeapi.co/api/v2/move/122/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'fire-blast',
        url: 'https://pokeapi.co/api/v2/move/126/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'skull-bash',
        url: 'https://pokeapi.co/api/v2/move/130/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'amnesia',
        url: 'https://pokeapi.co/api/v2/move/133/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'psywave',
        url: 'https://pokeapi.co/api/v2/move/149/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rest',
        url: 'https://pokeapi.co/api/v2/move/156/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rock-slide',
        url: 'https://pokeapi.co/api/v2/move/157/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'substitute',
        url: 'https://pokeapi.co/api/v2/move/164/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'snore',
        url: 'https://pokeapi.co/api/v2/move/173/'
      },
      version_group_details: [
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'curse',
        url: 'https://pokeapi.co/api/v2/move/174/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'flail',
        url: 'https://pokeapi.co/api/v2/move/175/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'protect',
        url: 'https://pokeapi.co/api/v2/move/182/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'belly-drum',
        url: 'https://pokeapi.co/api/v2/move/187/'
      },
      version_group_details: [
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'mud-slap',
        url: 'https://pokeapi.co/api/v2/move/189/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        }
      ]
    },
    {
      move: {
        name: 'zap-cannon',
        url: 'https://pokeapi.co/api/v2/move/192/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        }
      ]
    },
    {
      move: {
        name: 'icy-wind',
        url: 'https://pokeapi.co/api/v2/move/196/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'outrage',
        url: 'https://pokeapi.co/api/v2/move/200/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'sandstorm',
        url: 'https://pokeapi.co/api/v2/move/201/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'endure',
        url: 'https://pokeapi.co/api/v2/move/203/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'charm',
        url: 'https://pokeapi.co/api/v2/move/204/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rollout',
        url: 'https://pokeapi.co/api/v2/move/205/'
      },
      version_group_details: [
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'swagger',
        url: 'https://pokeapi.co/api/v2/move/207/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'attract',
        url: 'https://pokeapi.co/api/v2/move/213/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'sleep-talk',
        url: 'https://pokeapi.co/api/v2/move/214/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'return',
        url: 'https://pokeapi.co/api/v2/move/216/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'frustration',
        url: 'https://pokeapi.co/api/v2/move/218/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'dynamic-punch',
        url: 'https://pokeapi.co/api/v2/move/223/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        }
      ]
    },
    {
      move: {
        name: 'encore',
        url: 'https://pokeapi.co/api/v2/move/227/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'pursuit',
        url: 'https://pokeapi.co/api/v2/move/228/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'hidden-power',
        url: 'https://pokeapi.co/api/v2/move/237/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rain-dance',
        url: 'https://pokeapi.co/api/v2/move/240/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'sunny-day',
        url: 'https://pokeapi.co/api/v2/move/241/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'crunch',
        url: 'https://pokeapi.co/api/v2/move/242/'
      },
      version_group_details: [
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'psych-up',
        url: 'https://pokeapi.co/api/v2/move/244/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        }
      ]
    },
    {
      move: {
        name: 'shadow-ball',
        url: 'https://pokeapi.co/api/v2/move/247/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rock-smash',
        url: 'https://pokeapi.co/api/v2/move/249/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        }
      ]
    },
    {
      move: {
        name: 'whirlpool',
        url: 'https://pokeapi.co/api/v2/move/250/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'uproar',
        url: 'https://pokeapi.co/api/v2/move/253/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'stockpile',
        url: 'https://pokeapi.co/api/v2/move/254/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'swallow',
        url: 'https://pokeapi.co/api/v2/move/256/'
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'facade',
        url: 'https://pokeapi.co/api/v2/move/263/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'focus-punch',
        url: 'https://pokeapi.co/api/v2/move/264/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'superpower',
        url: 'https://pokeapi.co/api/v2/move/276/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 65,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'recycle',
        url: 'https://pokeapi.co/api/v2/move/278/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'brick-break',
        url: 'https://pokeapi.co/api/v2/move/280/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'yawn',
        url: 'https://pokeapi.co/api/v2/move/281/'
      },
      version_group_details: [
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/'
          }
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'snatch',
        url: 'https://pokeapi.co/api/v2/move/289/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'secret-power',
        url: 'https://pokeapi.co/api/v2/move/290/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        }
      ]
    },
    {
      move: {
        name: 'hyper-voice',
        url: 'https://pokeapi.co/api/v2/move/304/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rock-tomb',
        url: 'https://pokeapi.co/api/v2/move/317/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'block',
        url: 'https://pokeapi.co/api/v2/move/335/'
      },
      version_group_details: [
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'covet',
        url: 'https://pokeapi.co/api/v2/move/343/'
      },
      version_group_details: [
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'shock-wave',
        url: 'https://pokeapi.co/api/v2/move/351/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'water-pulse',
        url: 'https://pokeapi.co/api/v2/move/352/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'hammer-arm',
        url: 'https://pokeapi.co/api/v2/move/359/'
      },
      version_group_details: [
        {
          level_learned_at: 44,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'natural-gift',
        url: 'https://pokeapi.co/api/v2/move/363/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'fling',
        url: 'https://pokeapi.co/api/v2/move/374/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'gastro-acid',
        url: 'https://pokeapi.co/api/v2/move/380/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'last-resort',
        url: 'https://pokeapi.co/api/v2/move/387/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'seed-bomb',
        url: 'https://pokeapi.co/api/v2/move/402/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'focus-blast',
        url: 'https://pokeapi.co/api/v2/move/411/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'giga-impact',
        url: 'https://pokeapi.co/api/v2/move/416/'
      },
      version_group_details: [
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 35,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 35,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 56,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'zen-headbutt',
        url: 'https://pokeapi.co/api/v2/move/428/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'rock-climb',
        url: 'https://pokeapi.co/api/v2/move/431/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        }
      ]
    },
    {
      move: {
        name: 'gunk-shot',
        url: 'https://pokeapi.co/api/v2/move/441/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'iron-head',
        url: 'https://pokeapi.co/api/v2/move/442/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'captivate',
        url: 'https://pokeapi.co/api/v2/move/445/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/'
          }
        }
      ]
    },
    {
      move: {
        name: 'smack-down',
        url: 'https://pokeapi.co/api/v2/move/479/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'heavy-slam',
        url: 'https://pokeapi.co/api/v2/move/484/'
      },
      version_group_details: [
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'after-you',
        url: 'https://pokeapi.co/api/v2/move/495/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'round',
        url: 'https://pokeapi.co/api/v2/move/496/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'chip-away',
        url: 'https://pokeapi.co/api/v2/move/498/'
      },
      version_group_details: [
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'incinerate',
        url: 'https://pokeapi.co/api/v2/move/510/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        }
      ]
    },
    {
      move: {
        name: 'retaliate',
        url: 'https://pokeapi.co/api/v2/move/514/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'bulldoze',
        url: 'https://pokeapi.co/api/v2/move/523/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'work-up',
        url: 'https://pokeapi.co/api/v2/move/526/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'wild-charge',
        url: 'https://pokeapi.co/api/v2/move/528/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'heat-crash',
        url: 'https://pokeapi.co/api/v2/move/535/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'belch',
        url: 'https://pokeapi.co/api/v2/move/562/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'confide',
        url: 'https://pokeapi.co/api/v2/move/590/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'power-up-punch',
        url: 'https://pokeapi.co/api/v2/move/612/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        }
      ]
    },
    {
      move: {
        name: 'darkest-lariat',
        url: 'https://pokeapi.co/api/v2/move/663/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'high-horsepower',
        url: 'https://pokeapi.co/api/v2/move/667/'
      },
      version_group_details: [
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/'
          }
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'stomping-tantrum',
        url: 'https://pokeapi.co/api/v2/move/707/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/'
          }
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'body-press',
        url: 'https://pokeapi.co/api/v2/move/776/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'steel-roller',
        url: 'https://pokeapi.co/api/v2/move/798/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    },
    {
      move: {
        name: 'terrain-pulse',
        url: 'https://pokeapi.co/api/v2/move/805/'
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/'
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/'
          }
        }
      ]
    }
  ],
  name: 'snorlax',
  order: 235,
  past_types: [],
  species: {
    name: 'snorlax',
    url: 'https://pokeapi.co/api/v2/pokemon-species/143/'
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/143.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png',
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg',
        front_female: null
      },
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/143.png',
        front_shiny_female: null
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
      }
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/143.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/143.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/143.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/143.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/143.png'
        },
        yellow: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/143.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/143.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/143.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/143.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/143.png'
        }
      },
      'generation-ii': {
        crystal: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/143.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/143.png',
          back_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/143.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/143.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/143.png',
          front_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/143.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/143.png'
        },
        gold: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/143.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/143.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/143.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/143.png'
        },
        silver: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/143.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/143.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/143.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/143.png'
        }
      },
      'generation-iii': {
        emerald: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/143.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/143.png'
        },
        'firered-leafgreen': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/143.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/143.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/143.png'
        },
        'ruby-sapphire': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/143.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/143.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/143.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/143.png'
        }
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/143.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/143.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/143.png',
          front_shiny_female: null
        },
        'heartgold-soulsilver': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/143.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/143.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/143.png',
          front_shiny_female: null
        },
        platinum: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/143.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/143.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/143.png',
          front_shiny_female: null
        }
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/143.gif',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/143.gif',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/143.gif',
            front_shiny_female: null
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/143.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/143.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/143.png',
          front_shiny_female: null
        }
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/143.png',
          front_shiny_female: null
        },
        'x-y': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/143.png',
          front_shiny_female: null
        }
      },
      'generation-vii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/143.png',
          front_female: null
        },
        'ultra-sun-ultra-moon': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/143.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/143.png',
          front_shiny_female: null
        }
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/143.png',
          front_female: null
        }
      }
    }
  },
  stats: [
    {
      base_stat: 160,
      effort: 2,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/'
      }
    },
    {
      base_stat: 110,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/'
      }
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/'
      }
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/'
      }
    },
    {
      base_stat: 110,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/'
      }
    },
    {
      base_stat: 30,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/'
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/'
      }
    }
  ],
  weight: 4600
}
export default selectedPokemon
