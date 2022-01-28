import { Routes, Route } from "react-router-dom";
import { HomePage  }from 'components/hompepage'
import { DriftPage } from 'components/DriftPage';
import { TimeAttackPage } from 'components/TimeAttackPage';
import { ForzaPage } from 'components/ForzaPage';

const Router = () => {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/drift" element={<DriftPage />} />
                <Route path="/timeattack" element={<TimeAttackPage />} />
                <Route path="/forza" element={<ForzaPage />} />
            </Routes>
        </div>
    );
};

export { Router };