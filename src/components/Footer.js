import React from 'react';

import { getLinkByName } from '../utilities/linkFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LinkText } from './LinkText';
import { LogoBlock } from './Logo';
import { iconLookup } from '../utilities/iconLookup';


export function Footer() {
    return (
        <footer className="h-40">
            <div className="flex flex-col justify-between w-full mx-auto md:flex-row md:w-4/5">
                <div className="hidden w-1/2 p-10 md:block">
                    <LogoBlock showLabel={true} size="lg"/>
                </div>

                <div className="flex flex-col w-full gap-2 px-4 pt-10 align-middle bg-white md:w-1/5">
                    {/*<SubscribeAxios id="subscribe-marketing" color="blue"/>*/}                    

                    <LinkText isExternal color="purple-600" link={getLinkByName('contact')} id="contact">
                        Contact
                    </LinkText>

                    <div className="font-light text-gray-500">
                        <FontAwesomeIcon icon={iconLookup.faCopyright} size="sm"/>2021 Embarkable
                    </div>
                    
                </div>
            </div>
        </footer>
    )}

export default Footer;